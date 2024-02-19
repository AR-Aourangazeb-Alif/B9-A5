const seats = document.getElementsByClassName("seats");
const clickedSeat = [];
let totalPrice = 550*clickedSeat.length;
let grandTotal = totalPrice;

document.getElementById("total-price").innerText = totalPrice;
document.getElementById("grand-total").innerText = grandTotal;

const div2 = `<div class="flex justify-end">Economy</div>`;
const div3 = `<div class="flex justify-end">550</div>`;

document.getElementById("seatCounter").innerText = clickedSeat.length;
document.getElementById("seat-left").innerText = 40-clickedSeat.length;

for (let seat of seats) {

    seat.addEventListener("click", function () {
        if ((!clickedSeat.includes(seat.innerText)) && clickedSeat.length<4) {
            seat.style.backgroundColor = "#1DD100";
            seat.style.color="white";
            clickedSeat.push(seat.innerText);

            document.getElementById("seatCounter").innerText = clickedSeat.length;
            document.getElementById("seat-left").innerText = 40-clickedSeat.length;

            const div1 = `<div>${seat.innerText}</div>`;

            document.getElementById("selected-seat-list").innerHTML += `${div1}`
            document.getElementById("selected-seat-list").innerHTML += `${div2}`;
            document.getElementById("selected-seat-list").innerHTML += `${div3}`;


            totalPrice = 550*clickedSeat.length;
            grandTotal = totalPrice;

            document.getElementById("total-price").innerText = totalPrice;
            document.getElementById("grand-total").innerText = grandTotal;


            console.log(div1);


            console.log(clickedSeat);
        }
    })
}