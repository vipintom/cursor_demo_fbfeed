const feedContainer = document.getElementById('feed');
const postUrls = [
    "https://www.facebook.com/permalink.php?story_fbid=pfbid0qEqp2VbHApqxxAN6pFgtQZWrP2RgZqGXR2CjwhDcKw1qDLYFQLxznqNUcgmor4GYl&id=61564871106817",
    "https://www.facebook.com/meredeshkidharatee/posts/pfbid033WzypsKTdt5eAD7zEKorQ95EygWnYmWRbDhGAVF9sceDj8kiVPYgVECP4q6EEmFUl",
    "https://www.facebook.com/premrajkumaryadavofficial/posts/pfbid027Ma7T8NK5mfpJaUgKaRkzZiLFWUru2T8BxkgKWZhYNfPDZhf4CakCFsnhQutCkFTl",
    "https://www.facebook.com/Nehakumari2233/posts/pfbid02WnujDjZ6Vtdb1Pw6Ri8yRWhZ6WDbJEjiKYyVNivTJEKBXk2WmtwQ1qL9VmkkdMdNl",
    "https://www.facebook.com/loveduniya1122/posts/pfbid021ezXhenWuiG7W7QPLEpAVamo6XsoAiBtJ3GcBjnf6ob65LuLL6m3z9kPuSnVEXFZl"
];

postUrls.forEach(url => {
    const postDiv = document.createElement('div');
    postDiv.classList.add('fb-post');
    postDiv.setAttribute('data-href', url);
    postDiv.setAttribute('data-width', '500');
    feedContainer.appendChild(postDiv);
});

FB.XFBML.parse(); // Ensure Facebook SDK parses and renders the embedded posts