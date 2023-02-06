let root = document.getElementById("root");

let imgArr = ["chair-01.jpg", "chair-02.jpg", "chair-03.jpg", "chair-04.jpg", "chair-05.jpg", "chair-06.jpg", "chair-07.jpg", "chair-08.jpg"]

root.innerHTML = `<div class="product">  

<img src="./img/${imgArr[0]}" alt="chair-01" />
<img src="./img/${imgArr[1]}" alt="chair-02" />
<img src="./img/${imgArr[2]}" alt="chair-03" />
<img src="./img/${imgArr[3]}" alt="chair-04" />
<img src="./img/${imgArr[4]}" alt="chair-05" />
<img src="./img/${imgArr[5]}" alt="chair-06" />
<img src="./img/${imgArr[6]}" alt="chair-07" />
<img src="./img/${imgArr[7]}" alt="chair-08" />

</div>
`