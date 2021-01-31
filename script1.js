//static content

//get body element from index.html page
let body=document.querySelector('body');

//function to attributes and styles of containers
let setcontainer=(container,id)=>{
    container.setAttribute('class','container p-1 bg-dark');
    container.style.border="5px solid #5bc0de";
    container.style.boxShadow="0px 0px 20px #FF00CC";
    container.id=`${id}`;
}
// creating two div element which will act as containers
let container1=document.createElement('div');
let container2=document.createElement('div');

//calling the setcontainer function to set two containers
setcontainer(container1,'container1');
setcontainer(container2,'container2');

//appending the container1 to the body
body.append(container1);

//creating a div element which will act as first row of container2
let con2row1=document.createElement('div');
con2row1.setAttribute('class','row');

//creating an h4 element which will show the current page number in the index.html page
let page=document.createElement('h4');
page.setAttribute('id','page');
page.style.color='aqua';
page.style.textAlign='center';
page.style.textShadow=':deeppink 1px 1px 10px';

//appending the h4 element to the row1 of container2 and then appending that row in the container2
con2row1.append(page);
container2.append(con2row1);

//creating an div element which will act as row2 of container2
let con2row2=document.createElement('div');
con2row2.setAttribute('class','row p-0 m-0 justify-content-center');

//creating a div element which will act as column 1 of row2 of container2
let con2row2col1=document.createElement('div');
con2row2col1.setAttribute('class','col-2 col-lg-1 p-0 m-0');

//creating a div element which will act as row of column 1 of row2 of container2
let con2row2col1row=document.createElement('div');
con2row2col1row.setAttribute('class','row p-0 m-0');
con2row2col1row.setAttribute('id','prev');

//appending the row of column 1 of row2 of container2 to the column 1 of row2 of container2 and then appending tht column1 to the row2 of container2
con2row2col1.append(con2row2col1row);
con2row2.append(con2row2col1);

//creating a div element which will act as column 2 of row2 of container2
let con2row2col2=document.createElement('div');
con2row2col2.setAttribute('class','col-7 col-lg-4 p-0 m-0');
con2row2col2.setAttribute('id','buttons');
con2row2col2.style.textAlign="center";

//appending the column 2 of row2 of container2 to the row2 of container2
con2row2.append(con2row2col2);

//creating a div element which will act as column 3 of row2 of container2
let con2row2col3=document.createElement('div');
con2row2col3.setAttribute('class','col-2 col-lg-1 p-0 m-0');

//creating a div element which will act as row of column 3 of row2 of container2
let con2row2col3row=document.createElement('div');
con2row2col3row.setAttribute('class','row p-0 m-0');
con2row2col3row.setAttribute('id','next');

//appending the row of column 3 of row2 of container2 to the column 3 of row2 of container2 and then appending that column3 to the row2 of container2
con2row2col3.append(con2row2col3row);
con2row2.append(con2row2col3);

//appending the row2 to the container2
container2.append(con2row2);

//appending the container2 to the body
body.append(container2);



