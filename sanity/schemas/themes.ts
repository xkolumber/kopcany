

export default{
    name:'themes',
    type:'document',
    title:'Témy',
    fields: [
        {
            name:'nazov_temy',
            type:'string',
            title:'Názov témy'
        },
        {
            name:'slug',
            type:'slug',
            title:'Slug',
            options: {
                source:'nazov_temy',
            }
        },
    ]
}