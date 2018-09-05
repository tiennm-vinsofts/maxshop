<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateSlideAPIRequest;
use App\Http\Requests\API\UpdateSlideAPIRequest;
use App\Models\Slide;
use App\Repositories\SlideRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use InfyOm\Generator\Criteria\LimitOffsetCriteria;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

/**
 * Class SlideController
 * @package App\Http\Controllers\API
 */

class SlideAPIController extends AppBaseController
{
    /** @var  SlideRepository */
    private $slideRepository;

    public function __construct(SlideRepository $slideRepo)
    {
        $this->slideRepository = $slideRepo;
    }

    /**
     * Display a listing of the Slide.
     * GET|HEAD /slides
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->slideRepository->pushCriteria(new RequestCriteria($request));
        $this->slideRepository->pushCriteria(new LimitOffsetCriteria($request));
        $slides = $this->slideRepository->all();

        return $this->sendResponse($slides->toArray(), 'Slides retrieved successfully');
    }

    /**
     * Store a newly created Slide in storage.
     * POST /slides
     *
     * @param CreateSlideAPIRequest $request
     *
     * @return Response
     */
    public function store(CreateSlideAPIRequest $request)
    {
        $input = $request->all();

        $slides = $this->slideRepository->create($input);

        return $this->sendResponse($slides->toArray(), 'Slide saved successfully');
    }

    /**
     * Display the specified Slide.
     * GET|HEAD /slides/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var Slide $slide */
        $slide = $this->slideRepository->findWithoutFail($id);

        if (empty($slide)) {
            return $this->sendError('Slide not found');
        }

        return $this->sendResponse($slide->toArray(), 'Slide retrieved successfully');
    }

    /**
     * Update the specified Slide in storage.
     * PUT/PATCH /slides/{id}
     *
     * @param  int $id
     * @param UpdateSlideAPIRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateSlideAPIRequest $request)
    {
        $input = $request->all();

        /** @var Slide $slide */
        $slide = $this->slideRepository->findWithoutFail($id);

        if (empty($slide)) {
            return $this->sendError('Slide not found');
        }

        $slide = $this->slideRepository->update($input, $id);

        return $this->sendResponse($slide->toArray(), 'Slide updated successfully');
    }

    /**
     * Remove the specified Slide from storage.
     * DELETE /slides/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var Slide $slide */
        $slide = $this->slideRepository->findWithoutFail($id);

        if (empty($slide)) {
            return $this->sendError('Slide not found');
        }

        $slide->delete();

        return $this->sendResponse($id, 'Slide deleted successfully');
    }
}
