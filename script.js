let movies={
    apiKey:"15023ad5",
    fetchMovie:function(name){
        fetch('https://www.omdbapi.com/?t='+name+'&apikey='+this.apiKey).then((response)=>
            {if(!response.ok){alert("not valid");
            alert('please refresh to use again')
            throw new Error('no weather found');}
            return response.json();
        }).then((data)=>this.displayMovie(data));
    },
    displayMovie:function(data){
        
      console.log(data);
      console.log()
      

        console.log(data.Year,data.Title);//,Year,Language,Director);
        document.querySelector('.name').innerText="Movie Name : "+ data.Title;
        document.querySelector('.year').innerText="Released in : "+ data.Year;
        document.querySelector('.lang').innerText="Language : "+ data.Language;
        document.querySelector('.director').innerText="Director : "+ data.Director;
        document.querySelector('.cast').innerText="CAST : "+ data.Actors;
        document.body.style.backgroundImage="url("+`${data.Poster}`+")";
    },
    search:function(){
        this.fetchMovie(document.querySelector('.form-control').value);
    }
}
