
export const confirmations = [
    { id: 0, value: null , name: 'New', text: 'tw-text-white', bg: 'tw-bg-green-500', ring: 'tw-ring-green-300' },
    { id: 1, value: 'day-one-call-one' , name: 'Day-1 / 1st Call', text: 'tw-text-rose-500', bg: 'tw-bg-rose-200/10', ring: 'tw-ring-rose-200' },
    { id: 2, value: 'day-one-call-two' , name: 'Day-1 / 2nd Call', text: 'tw-text-rose-500', bg: 'tw-bg-rose-400/10', ring: 'tw-ring-rose-300' },
    { id: 3, value: 'day-one-call-three' , name: 'Day-1 / 3rd Call', text: 'tw-text-rose-500', bg: 'tw-bg-rose-600/10', ring: 'tw-ring-rose-400' },
    { id: 4, value: 'day-two-call-one' , name: 'Day-2 / 1st Call', text: 'tw-text-indigo-500', bg: 'tw-bg-indigo-200/10', ring: 'tw-ring-indigo-200' },
    { id: 5, value: 'day-two-call-two' , name: 'Day-2 / 2nd Call', text: 'tw-text-indigo-500', bg: 'tw-bg-indigo-400/10', ring: 'tw-ring-indigo-300' },
    { id: 6, value: 'day-two-call-three' , name: 'Day-2 / 3rd Call', text: 'tw-text-indigo-500', bg: 'tw-bg-indigo-600/10', ring: 'tw-ring-indigo-400' },
    { id: 7, value: 'day-three-call-one' , name: 'Day-3 / 1st Call', text: 'tw-text-blue-500', bg: 'tw-bg-blue-200/10', ring: 'tw-ring-blue-200' },
    { id: 8, value: 'day-three-call-two' , name: 'Day-3 / 2nd Call', text: 'tw-text-blue-500', bg: 'tw-bg-blue-400/10', ring: 'tw-ring-blue-300' },
    { id: 9, value: 'day-three-call-three' , name: 'Day-3 / 3rd Call', text: 'tw-text-blue-500', bg: 'tw-bg-blue-600/10', ring: 'tw-ring-blue-400' },
    { id: 10, value: 'reporter' , name: 'Reporter', text: 'tw-text-teal-500', bg: 'tw-bg-teal-500/10', ring: 'tw-ring-teal-300' },
    { id: 11, value: 'annuler' , name: 'Annuler', text: 'tw-text-red-500', bg: 'tw-bg-red-500/10', ring: 'tw-ring-red-300' },
    // { id: 12, value: 'expidier' , name: 'Expidier', text: 'tw-text-fuchsia-500', bg: 'tw-bg-fuchsia-500/10', ring: 'tw-ring-fuchsia-300' },
    // { id: 13, value: 'livre' , name: 'Livré', text: 'tw-text-green-500', bg: 'tw-bg-green-500/10', ring: 'tw-ring-green-300' },
    { id: 13, value: 'confirmer' , name: 'Confirmer', text: 'tw-text-green-500', bg: 'tw-bg-green-500/10', ring: 'tw-ring-green-300' },
]

export const upsells = [
    { id: 0, value: null, name: 'select', text: 'tw-text-neutral-600', bg: 'tw-bg-neutral-500/10', ring: 'tw-ring-neutral-300' },
    { id: 1, value: 'oui', name: 'Oui', text: 'tw-text-green-500', bg: 'tw-bg-green-500/10', ring: 'tw-ring-green-300' },
    { id: 2, value: 'non', name: 'Non', text: 'tw-text-pink-500', bg: 'tw-bg-pink-500/10', ring: 'tw-ring-pink-300' },
]

export const deliveryStatus = [
    { id: 0, value: null , name: 'Select', text: 'tw-text-gray-500', bg: 'tw-bg-gray-500/10', ring: 'tw-ring-gray-300' },
    { id: 1, value:'dispatch', name: 'Dispatch', text: 'tw-text-yellow-500', bg: 'tw-bg-yellow-500/10', ring: 'tw-ring-yellow-300' },
    { id: 2, value: 'expidier' , name: 'Expidier', text: 'tw-text-fuchsia-500', bg: 'tw-bg-fuchsia-500/10', ring: 'tw-ring-fuchsia-300' },

    { id: 3, value:'livrer', name: 'Livrer', text: 'tw-text-green-500', bg: 'tw-bg-green-500/10', ring: 'tw-ring-green-300' },
    { id: 4, value:'reporter', name: 'Reporter', text: 'tw-text-orange-500', bg: 'tw-bg-orange-500/10', ring: 'tw-ring-orange-300' },
    
    { id: 5, value:'refuser', name: 'Refuser', text: 'tw-text-pink-500', bg: 'tw-bg-pink-500/10', ring: 'tw-ring-pink-300' },
    { id: 6, value:'annuler', name: 'Annuler', text: 'tw-text-red-500', bg: 'tw-bg-red-500/10', ring: 'tw-ring-red-300' },
    { id: 8, value:'hors-zone', name: 'Hors zone', text: 'tw-text-blue-500', bg: 'tw-bg-blue-500/10', ring: 'tw-ring-blue-300' },
    { id: 9, value:'pas-de-reponse', name: 'Pas de reponse', text: 'tw-text-yellow-500', bg: 'tw-bg-yellow-500/10', ring: 'tw-ring-yellow-300' },
    { id: 10, value:'retourner', name: 'Retourné', text: 'tw-text-purple-500', bg: 'tw-bg-purple-500/10', ring: 'tw-ring-purple-300' },
    { id: 11, value:'reconfirmer', name: 'Reconfirmer', text: 'tw-text-indigo-500', bg: 'tw-bg-indigo-500/10', ring: 'tw-ring-indigo-300' }
]

export const disabledForDelivery = [null, 'expidier', 'annuler', 'dispatch'];