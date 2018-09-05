<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\AppBaseController;
use App\Http\Requests\API\CreateSlideAPIRequest;
use App\Http\Requests\API\UpdateSlideAPIRequest;
use App\Models\Slide;
use App\Repositories\SlideRepository;
use Illuminate\Http\Request;
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
     * @param Request $request
     * @return Response
     *
     * @SWG\Get(
     *      path="/slides",
     *      summary="Get a listing of the Slides.",
     *      tags={"Slide"},
     *      description="Get all Slides",
     *      produces={"application/json"},
     *      @SWG\Response(
     *          response=200,
     *          description="successful operation",
     *          @SWG\Schema(
     *              type="object",
     *              @SWG\Property(
     *                  property="success",
     *                  type="boolean"
     *              ),
     *              @SWG\Property(
     *                  property="data",
     *                  type="array",
     *                  @SWG\Items(ref="#/definitions/Slide")
     *              ),
     *              @SWG\Property(
     *                  property="message",
     *                  type="string"
     *              )
     *          )
     *      )
     * )
     */
    public function index(Request $request)
    {
        $this->slideRepository->pushCriteria(new RequestCriteria($request));
        $this->slideRepository->pushCriteria(new LimitOffsetCriteria($request));
        $slides = $this->slideRepository->all();

        return $this->sendResponse($slides->toArray(), 'Slides retrieved successfully');
    }

    /**
     * @param CreateSlideAPIRequest $request
     * @return Response
     *
     * @SWG\Post(
     *      path="/slides",
     *      summary="Store a newly created Slide in storage",
     *      tags={"Slide"},
     *      description="Store Slide",
     *      produces={"application/json"},
     *      @SWG\Parameter(
     *          name="body",
     *          in="body",
     *          description="Slide that should be stored",
     *          required=false,
     *          @SWG\Schema(ref="#/definitions/Slide")
     *      ),
     *      @SWG\Response(
     *          response=200,
     *          description="successful operation",
     *          @SWG\Schema(
     *              type="object",
     *              @SWG\Property(
     *                  property="success",
     *                  type="boolean"
     *              ),
     *              @SWG\Property(
     *                  property="data",
     *                  ref="#/definitions/Slide"
     *              ),
     *              @SWG\Property(
     *                  property="message",
     *                  type="string"
     *              )
     *          )
     *      )
     * )
     */
    public function store(CreateSlideAPIRequest $request)
    {
        $input = $request->all();

        $slides = $this->slideRepository->create($input);

        return $this->sendResponse($slides->toArray(), 'Slide saved successfully');
    }

    /**
     * @param int $id
     * @return Response
     *
     * @SWG\Get(
     *      path="/slides/{id}",
     *      summary="Display the specified Slide",
     *      tags={"Slide"},
     *      description="Get Slide",
     *      produces={"application/json"},
     *      @SWG\Parameter(
     *          name="id",
     *          description="id of Slide",
     *          type="integer",
     *          required=true,
     *          in="path"
     *      ),
     *      @SWG\Response(
     *          response=200,
     *          description="successful operation",
     *          @SWG\Schema(
     *              type="object",
     *              @SWG\Property(
     *                  property="success",
     *                  type="boolean"
     *              ),
     *              @SWG\Property(
     *                  property="data",
     *                  ref="#/definitions/Slide"
     *              ),
     *              @SWG\Property(
     *                  property="message",
     *                  type="string"
     *              )
     *          )
     *      )
     * )
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
     * @param int $id
     * @param UpdateSlideAPIRequest $request
     * @return Response
     *
     * @SWG\Put(
     *      path="/slides/{id}",
     *      summary="Update the specified Slide in storage",
     *      tags={"Slide"},
     *      description="Update Slide",
     *      produces={"application/json"},
     *      @SWG\Parameter(
     *          name="id",
     *          description="id of Slide",
     *          type="integer",
     *          required=true,
     *          in="path"
     *      ),
     *      @SWG\Parameter(
     *          name="body",
     *          in="body",
     *          description="Slide that should be updated",
     *          required=false,
     *          @SWG\Schema(ref="#/definitions/Slide")
     *      ),
     *      @SWG\Response(
     *          response=200,
     *          description="successful operation",
     *          @SWG\Schema(
     *              type="object",
     *              @SWG\Property(
     *                  property="success",
     *                  type="boolean"
     *              ),
     *              @SWG\Property(
     *                  property="data",
     *                  ref="#/definitions/Slide"
     *              ),
     *              @SWG\Property(
     *                  property="message",
     *                  type="string"
     *              )
     *          )
     *      )
     * )
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
     * @param int $id
     * @return Response
     *
     * @SWG\Delete(
     *      path="/slides/{id}",
     *      summary="Remove the specified Slide from storage",
     *      tags={"Slide"},
     *      description="Delete Slide",
     *      produces={"application/json"},
     *      @SWG\Parameter(
     *          name="id",
     *          description="id of Slide",
     *          type="integer",
     *          required=true,
     *          in="path"
     *      ),
     *      @SWG\Response(
     *          response=200,
     *          description="successful operation",
     *          @SWG\Schema(
     *              type="object",
     *              @SWG\Property(
     *                  property="success",
     *                  type="boolean"
     *              ),
     *              @SWG\Property(
     *                  property="data",
     *                  type="string"
     *              ),
     *              @SWG\Property(
     *                  property="message",
     *                  type="string"
     *              )
     *          )
     *      )
     * )
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
