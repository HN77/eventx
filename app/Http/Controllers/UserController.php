<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserController extends Controller
{
    public function create(){
        return Inertia::render('Register/Register');
    }

    // Create New User
    public function store(Request $request) {
        $formFields = $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => ['required', 'min:6']
        ]);

        // Hash Password
        $formFields['password'] = bcrypt($formFields['password']);

        // Create User
        $user = User::create($formFields);

        // Login
        auth()->login($user);

        return redirect('/')->with('message', 'User created and logged in');
    }

        // Logout User
        public function logout(Request $request) {
            auth()->logout();
    
            $request->session()->invalidate();
            $request->session()->regenerateToken();
    
            return redirect('/')->with('message', 'You have been logged out!');
    
        }


    public function login(){
        $user = Auth::user();
        return Inertia::render('Login/Login',[
            'user' => $user,
        ]);
    }

        // Authenticate User
        public function authenticate(Request $request) {
            $formFields = $request->validate([
                'email' => ['required', 'email'],
                'password' => 'required'
            ]);
    
            if(auth()->attempt($formFields)) {
                $request->session()->regenerate();
    
                return redirect('/')->with('message', 'You are now logged in!');
            }
    
            return back()->withErrors(['email' => 'Invalid Credentials'])->onlyInput('email');
        }
}
