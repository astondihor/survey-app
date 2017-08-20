<?php

/**
 * @Author: astondihor
 * @Date:   2017-08-21 03:41:54
 * @Last Modified by:   astondihor
 * @Last Modified time: 2017-08-21 03:49:43
 */

Route::get('/dashboard', 'DashboardController@index')->name('admin.dashboard');

Route::group(['prefix' => 'surveys'], function ()
{
	// CRUD
	Route::get('/', 'SurveysController@index');
	Route::get('/demo', 'SurveysController@demo');


});

// CRUD
Route::get('/users', 'UsersController@index');

// CRUD
Route::get('/categories', 'CategoriesController@index');

Route::get('/send/bulk/email', 'EmailsController@index');

Route::get('/profile', 'UsersController@profile')->name('admin.users.profile');

Route::get('/settings', 'SettingsController@index');