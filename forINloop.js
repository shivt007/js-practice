let student={
    ram:45,
    shyam: 67,
    rohan:78,
    shivam:00,
    shivoy:-0
}

for( i=0; i<Object.keys(student).length; i++){
    console.log("marks of " + Object.keys(student)[i] + " is " + student[Object.keys(student)[i]]);
    
}
