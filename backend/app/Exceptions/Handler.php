<?php

namespace App\Exceptions;

use App\Traits\ApiResponserTrait;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Throwable;

class Handler extends ExceptionHandler
{

    use ApiResponserTrait;

    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
        
        $this->renderable(function(MethodNotAllowedHttpException $e){
            return $this->errorMessageResponse('Not Allowed', $e->getStatusCode());
        });

        $this->renderable(function(ValidationException $e){
            return $this->errorMessageResponse($e->validator->errors(), 422);
        });


        $this->renderable(function (NotFoundHttpException $e) {
            return $this->errorMessageResponse('Not found', $e->getStatusCode());
        });

        $this->renderable(function (HttpException $e) {
            return $this->errorMessageResponse($e->getMessage(), $e->getStatusCode());
        });


        if(!(env('APP_DEBUG'))){
             $this->renderable(function (Exception $e) {
                return $this->errorMessageResponse('Unexpected error occured!', 500);
             });
        }

    }
}
