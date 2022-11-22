<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends ApiResponserController
{

    public function index(Request $request)
    {   $sortBy = 'id';
        $sortOrder = 'desc';
        if($request->has('sort')){
            $sort = explode('.', $request->sort);
            $sortBy = $sort[0];
            $sortOrder = $sort[1];
        }
        $todos = Todo::orderBy($sortBy, $sortOrder)->paginate(5);
        return $this->listDataResponse($todos);
    }

    public function show($id)
    {
        $todo = Todo::findOrFail($id);
        return $this->singleDataResponse($todo);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|min:3|max:100',
            'start' => 'required|date|before_or_equal:end',
            'end'   => 'required|date|after_or_equal:start'
        ]);

        $todo = new Todo();
        $todo->title = $request->title;
        $todo->start = $request->start;
        $todo->end   = $request->end;

        if($todo->save()){
            return $this->successMessageResponse('Todo added successfully!', 201);
        }

        return $this->errorMessageResponse('Internal error occurred', 500);
    }


    public function update(Request $request)
    {
        $request->validate([
            'title' => 'required|min:3|max:100',
            'start' => 'required|date|before_or_equal:end',
            'end'   => 'required|date|after_or_equal:start',
            'is_completed' => 'required|integer'
        ]);

        $todo = Todo::findOrFail($request->id);
        $todo->title = $request->title;
        $todo->start = $request->start;
        $todo->end   = $request->end;
        $todo->is_completed = $request->is_completed;

        if($todo->isClean()){
            return $this->errorMessageResponse('No change', 406);
        }

        if($todo->save()){
            return $this->successMessageResponse('Todo updated', 200); 
        }

        return $this->errorResponse('Internal Error occurred', 500);
    }

    public function destroy($id)
    {
       $todo = Todo::findOrFail($id);
       if($todo->delete()){
        return $this->successMessageResponse('Todo deleted', 200); 
       }

       return $this->errorResponse('Internal Error occurred', 500);
    }
}
