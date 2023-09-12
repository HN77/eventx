<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class EventController extends Controller
{

    public function index()
{
    $events = Event::latest()
    ->filter(request(['start_date', 'title', 'location']))->paginate(6);

    $user = Auth::user();
    return Inertia::render('Home/Home', [
        'user' => $user,
        'events' => $events,
    ]);
}
    

    public function store(Request $request){
        $data = $request->validate([
            'title' => 'required',
            'start_date' => 'required',
            'location' => 'required',
            'description' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:4048',
        ]);

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public');
            $data['image'] = $imagePath;
        }

        $data['user_id'] = auth()->id();
        
        Event::create($data);
        
        return redirect('/')->with('success', 'Événement créé avec succès!');

    }

    public function update(Request $request, Event $event){
        if($event->user_id != auth()->id()) {
            abort(403, 'Action non autorisée!');
        }

        $data = $request->validate([
            'title' => 'required',
            'start_date' => 'required',
            'location' => 'required',
            'description' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public'); 
            $data['image'] = $imagePath;
        }
        
        
        $event->update($data);
        
        return back()->with('success', 'Événement a ete modifie avec succés!');
    }

    // Delete Event
    public function destroy(Event $event){
        if($event->user_id != auth()->id()) {
            abort(403, 'Action non autorisée!');
        }
        $event->delete();
        return redirect('/')->with('success', 'Événement supprimé avec succés!');
    }

    public function show(Event $event){
        $user = Auth::user();
        return Inertia::render('Event/Event', [
            'user' => $user,
            'event' => $event
        ]);
    }
}
