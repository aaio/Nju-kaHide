// ==UserScript==
// @name         NjuškaHide
// @namespace    http://dominikjankovic.from.hr/
// @version      0.1
// @description  Hides specific ads on Njuškalo.
// @author       Dominik Janković
// @match        http://www.njuskalo.hr/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

var localStorageKey = 'Jankovic--hiddenAds';

function clearLocalStorage (err) {
    localStorage.removeItem(localStorageKey);
    alert("Zbog greške u dohvaćanju, lista sakrivenih oglasa morala je biti resetirana. Isprike na neugodnosti.\n\nGreška:\n" + err + "\n\nMolim kontaktirajte me na aaio@outlook.com sa slikom greške.");
}

function getHiddenAds () {
    var lsArrStr = localStorage.getItem(localStorageKey);
    if (lsArrStr === null)
        return [];
    return JSON.parse(lsArrStr);
}

function updateAdCount (offset) {
    var count = parseInt($('.entity-list-header .entities-count').text());
    count -= offset;
    $('.entity-list-header .entities-count').text(count);
}

$('.EntityList-item').each(function () {
    
    var id = $(this).data('ad-id');
    
    if (getHiddenAds().indexOf(id) !== -1)
        $(this).remove();
    
    $(this).find('.tool-items').append(
        $('<li>').addClass('tool-item').append(
            $('<button>').addClass('icon-item tool Jankovic--tool--hideAd').data('id', id).attr('title', 'Sakrij oglas').attr('type', 'button').append(
                $('<span>').addClass('icon icon--action icon--xs').attr('style', 'background: url("http://static.njuskalo.hr/images/redizajn/icons/icons.png") no-repeat -640px 0px').text('Sakrij oglas')
            )
        )
    );
    
});

$('.Jankovic--tool--hideAd').click(function () {
    var id = $(this).data('id');
    var arr = getHiddenAds();
    
    if(arr.indexOf(id) === -1) {
        arr.push(id);
        $(this).closest('.EntityList-item').remove();
        updateAdCount(1);
    } else {
        alert('Greška! Oglas bi već trebao biti sakriven. Molim kontaktiraj me na aaio@outlook.com');
    }
    
    localStorage.setItem('Jankovic--hiddenAds', JSON.stringify(arr));
    console.log(JSON.parse(localStorage.getItem('Jankovic--hiddenAds')));
});

updateAdCount(getHiddenAds().length);
