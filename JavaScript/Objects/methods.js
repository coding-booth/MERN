let produts ={
    avgRating: 4.5,
    noOfRating: 38,
    rating: {
        fivestar:10,
        fourstar:5,
        threestar:3,
        twostar:12,
        onestar:8,
        showRating: function() {
            let totalRating = this.fivestar + this.fourstar +this.threestar + this.twostar + this.onestar;

    let averageRating = (5*this.fivestar + 4*this.fourstar + 3*this.threestar + 2*this.twostar + 1*this.onestar)/ totalRating

console.log('Average Rating :',averageRating);
    console.log('Total Ratings : ', totalRating);
        }
    }
};

function showRating(rating){
    let totalRating = rating.fivestar + rating.fourstar +rating.threestar + rating.twostar + rating.onestar;

    let averageRating = (5*rating.fivestar + 4*rating.fourstar + 3*rating.threestar + 2*rating.twostar + 1*rating.onestar)/ totalRating

console.log('Average Rating :',averageRating);
    console.log('Total Ratings : ', totalRating);
}
showRating(produts.rating);
produts.rating.showRating();