import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from '../components/movie/movie.component';
import { CatComponent } from '../components/cat/cat.component';
import { DogComponent } from '../components/dog/dog.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/movie',
        pathMatch: 'full',

    },
    {
        path: 'movie',
        component: MovieComponent,
        data:{
            depth:1
        }
    },
    {
        path: 'cat',
        component: CatComponent,
        data:{
            depth:2
        }
    },
    {
        path: 'dog',
        component: DogComponent,
        data:{
            depth:3
        }
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true
        }),
    ],
    exports: [RouterModule],
    providers: [
    ]
})
export class AppRoutingModule { }