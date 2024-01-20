async function test(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const student = await response.json();
    for(i=0;i<student.length;i++){
         console.log(student[i].id);
         console.log(student[i].title);
    }
   
    return student;
    }catch(e){
        console.log(e)
    }
    
}

test().then((res)=>{
    // console.log(res);
    console.log(typeOf(res));
});

