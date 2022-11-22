<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TodoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->text(100),
            'start' => $this->faker->date('Y-m-d',  'now'),
            'end'   => $this->faker->dateTimeBetween('now', '+10 days'),
            'is_completed' => rand(0, 1)
        ];
    }
}
