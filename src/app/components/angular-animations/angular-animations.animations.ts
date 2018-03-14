import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    stagger,
    keyframes
} from '@angular/animations';

export const Animations =
    {
        listAnimation: trigger('listAnimation', [
            transition('* => *', [
                query(':enter', style({ opacity: 0 }), { optional: true }),
                query(':enter', stagger('300ms', [
                    animate('1s ease-in', keyframes([
                        style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                        style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                        style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
                    ]))]), { optional: true }),
                query(':leave', stagger('300ms', [
                    animate('1s ease-in', keyframes([
                        style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                        style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                        style({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0 }),
                    ]))]), { optional: true })
            ])
        ]),
        explainerAnim: trigger('explainerAnim', [
            transition('* => *', [
                query('.col', style({ opacity: 0, transform: 'translateX(-40px)' })),

                query('.col', stagger('500ms', [
                    animate('800ms 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
                ])),

                query('.col', [
                    animate(1000, style('*'))
                ])

            ])
        ])
    }

