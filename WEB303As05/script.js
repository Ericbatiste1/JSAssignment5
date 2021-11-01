/*
    Assignment 5
    {Eric Batiste}
*/

$(document).ready(function(){
    // your code here
    const cards =  [
        new ContentCard(0, "Baseball", "America's Favourite Passed Time", "Sport"),
        new ContentCard(1, "Rust", "Survival", "Video Game"),
        new ContentCard(2, "Google Chrome", "Google Web browser", "Browser"),
        new ContentCard(3, "iPhone", "The world's most powerful personal device", "Phone"),
        new ContentCard(4, "Windex", "Best Window Cleaner", "Glass Cleaner")
    ]

	//$("#content-list").append(cards[0].toString())
	//$("#content-list").append(cards[1].toString())
	//$("#content-list").append(cards[2].toString())
	//$("#content-list").append(cards[3].toString())
	//$("#content-list").append(cards[4].toString())
		
    for (let card of cards) {
        $("#content-list").append(card.toString())
    }
});

class ContentCard {
    constructor(id, title, desc, category) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.category = category;
    }

    updateContent(title, desc, category) {
        if (title != null) {
            this.title = title;
        }
        if (desc != null) {
            this.desc = desc;
        }
        if (category != null) {
            this.category = category;
        }
    }

    toString() {
        return `<div id="content-${this.id}">
        <h4>${this.title}</h4>
        <p>${this.desc}</p>
        <div>${this.category}</div>
        </div>
        `
    }
}


