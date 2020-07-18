const url="https://spreadsheets.google.com/feeds/list/1YR5UozWNEPpyCGal0xQWTiUj5nzXS2b2emUhuBE62fs/od6/public/values?alt=json"
fetch(url)
    .then(response => response.json())
    .then(data=>{
        console.log(data.feed.entry)
        const projects=data.feed.entry.map(entry =>{
            return{
                //where do you get this from?
                image: entry.gsx$image.$t,
                url: entry.gsx$url.$t,
                title: entry.gsx$title.$t,
            }
        })
        app(projects)
    })
const app=(data)=>{
    //console.log('app is running')
    console.log(data)
    data.forEach(project=>{

        //($('<img>').attr('src', project.image)).appendTo('#linkuno')
        //const $projectDiv = createProjectElement(project)
        //$().append($projectDiv)
        const $a=$('<a>').attr('href', project.url)
        $a.append($('<img>').attr('src', project.image))
        $a.appendTo('#linkuno')
        
    })
}