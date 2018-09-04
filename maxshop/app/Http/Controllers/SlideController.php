<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateSlideRequest;
use App\Http\Requests\UpdateSlideRequest;
use App\Repositories\SlideRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;
use App\Helpers\Helper;
class SlideController extends AppBaseController
{
    /** @var  SlideRepository */
    private $slideRepository;
    private $helper;

    public function __construct(SlideRepository $slideRepo,Helper $helper)
    {
        $this->slideRepository = $slideRepo;
        $this->helper = $helper;
    }

    /**
     * Display a listing of the Slide.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->slideRepository->pushCriteria(new RequestCriteria($request));
        $slides = $this->slideRepository->all();

        return view('slides.index')
            ->with('slides', $slides);
    }

    /**
     * Show the form for creating a new Slide.
     *
     * @return Response
     */
    public function create()
    {
        return view('slides.create');
    }

    /**
     * Store a newly created Slide in storage.
     *
     * @param CreateSlideRequest $request
     *
     * @return Response
     */
    public function store(CreateSlideRequest $request)
    {
        $input = $request->all();
        $input['img'] = $this->helper->uploadImage('img');

        $slide = $this->slideRepository->create($input);

        Flash::success('Slide saved successfully.');

        return redirect(route('slides.index'));
    }

    /**
     * Display the specified Slide.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $slide = $this->slideRepository->findWithoutFail($id);

        if (empty($slide)) {
            Flash::error('Slide not found');

            return redirect(route('slides.index'));
        }

        return view('slides.show')->with('slide', $slide);
    }

    /**
     * Show the form for editing the specified Slide.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $slide = $this->slideRepository->findWithoutFail($id);

        if (empty($slide)) {
            Flash::error('Slide not found');

            return redirect(route('slides.index'));
        }

        return view('slides.edit')->with('slide', $slide);
    }

    /**
     * Update the specified Slide in storage.
     *
     * @param  int              $id
     * @param UpdateSlideRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateSlideRequest $request)
    {
        $slide = $this->slideRepository->findWithoutFail($id);

        if (empty($slide)) {
            Flash::error('Slide not found');

            return redirect(route('slides.index'));
        }

        $slide = $this->slideRepository->update($request->all(), $id);

        Flash::success('Slide updated successfully.');

        return redirect(route('slides.index'));
    }

    /**
     * Remove the specified Slide from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $slide = $this->slideRepository->findWithoutFail($id);

        if (empty($slide)) {
            Flash::error('Slide not found');

            return redirect(route('slides.index'));
        }

        $this->slideRepository->delete($id);

        Flash::success('Slide deleted successfully.');

        return redirect(route('slides.index'));
    }
}
