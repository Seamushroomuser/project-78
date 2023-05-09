var images = [
  "https://i.postimg.cc/qqyYvVbq/grandpa.jpg",
 "https://i.postimg.cc/wjMnFtMX/father.jpg" ,
 "https://i.postimg.cc/5ymDKL83/bro.jpg",
  "https://i.postimg.cc/JnL6wtrd/sister.jpg",
  "https://i.postimg.cc/bw5W5zSK/mother.jpg"
];
var names = [
  "Ranbir Singh", 
  "Diljeet Singh", 
  "Rocky Singh", 
  "Alia Singh",
  "Soni Singh"
];
var i = 0;
function update() {
  i++;
  var Number_family_member_in_array = 4
  if(i > Number_family_member_in_array)
{
i = 0;
}
var updatedimage = images[i];
var updatedname = images[i];
document.getElementById("Family_member_image").src = updatedimage;
document.getElementById("Family_member_name").src = updatedname;
}