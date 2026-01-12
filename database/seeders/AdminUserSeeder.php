<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{

    public function run(): void
    {
        // Crear usuario administrador si no existe
        $admin = User::firstOrCreate(
            ['id' => 1],
            [
                'name' => 'Administrador',
                'email' => 'admin@fastfoodrestaurant.cl',
                'password' => Hash::make('admin123'), // Contraseña por defecto
                'phone' => '989088185',
                'address' => 'AAAA'
            ]
        );

        // Asigna el rol de administrador
        if (!$admin->hasRole('admin')) {
            $admin->assignRole('admin');
        }

    }
    
}
