<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        \App\Models\Event::create([
            'title' => 'Fete évenment',
            'start_date' => '2022-08-20',
            'location' => 'Paris',
            'description' => 'Le Lorem Ipsum est simplement du faux texte employe dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de 
            imprimerie depuis les années 1500, quand un imprimeur anonyme assembla 
            ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte',
        ]);
        \App\Models\Event::create([
            'title' => 'Nice évenment',
            'start_date' => '2023-05-10',
            'location' => 'Nice',
            'description' => 'Le Lorem Ipsum est simplement du faux texte employe dans la
             composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de 
             imprimerie depuis les années 1500, quand un imprimeur anonyme assembla 
             ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte'
        ]);
    }
}
