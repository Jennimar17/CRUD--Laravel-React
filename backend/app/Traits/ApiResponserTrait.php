<?php

namespace App\Traits;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;
use Illuminate\Database\Eloquent\Model;

trait ApiResponserTrait{
    protected function successMessageResponse($msg, $status){
        return response()->json($msg, $status);
    }

    protected function listDataResponse(LengthAwarePaginator $data, $status=200){
        return response()->json($data, $status);
    }

    protected function singleDataResponse(Model $data, $status=200){
        return response()->json($data, $status);
    }

    protected function errorMessageResponse($msg, $status){
        return response()->json($msg, $status);
    }
}