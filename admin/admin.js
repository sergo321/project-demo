const iname=document.querySelector("#inputname");
const price=document.querySelector("#inputprice");
const imgfile=document.querySelector("#inputimg");
const submitbtn=document.querySelector("#submitbtn");

// imgfile.addEventListener("change",(event) => {
//     const selectedfile = event.target.files;
//     if (selectedfile.length > 0) {
//       const [imageFiles] = selectedfile;
//       const fileReader = new FileReader();
//       fileReader.onload = () => {
//         const srcData = fileReader.result;
//         console.log('base64:', srcData)
//       };
//       fileReader.readAsDataURL(imageFiles);
//     }
//   });

imgfile.addEventListener("change",()=> { //base64 string
    const reader = new FileReader();
  
      reader.readAsDataURL(imgfile.files[0]);
      reader.onload = () => {
          submitbtn.addEventListener("click",()=>{
            let niameb=iname.value;
            let priceb=price.value;
            let imgfileb=reader.result;
            if (niameb==""||priceb==""||imgfileb==""){
                alert ("input all value")
            }else {
                addElementInFirebase("manuitems",{
                    dishname: niameb,
                    dishprice: priceb,
                    dishimgfile: imgfileb,
                })
                iname.value="";
                price.value="";
                imgfile.value="";
            }
           
        })
      }   
  }) 

