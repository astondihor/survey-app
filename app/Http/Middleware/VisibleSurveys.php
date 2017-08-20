<?php

namespace App\Http\Middleware;

use App\User;
use Closure;

class VisibleSurveys
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        /*
         * Example of handling visible surveys
         * Apply when you want to limit the surveys that are accessible to user
         * */
//        $visibleSurveys = User::find(3)->surveys->pluck('id')->toArray();
//        $request->merge(compact('visibleSurveys'));
        return $next($request);
    }
}
