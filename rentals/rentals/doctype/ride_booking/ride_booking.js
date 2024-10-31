// Copyright (c) 2024, santosh and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Booking", {
	refresh(frm) {

	},
    rate(frm){
        frm.trigger("update_total_amount");
    },

    update_total_amount(frm){
        let total_d = 0;
        for(let i of frm.doc.item){
            total_d+=i.distance
    
        }

        const amount=total_d*frm.doc.rate; 
        frm.set_value("total_amount",amount);
    }
});


frappe.ui.form.on("Ride Booking Item", {
	refresh(frm) {

	},
    distance(frm,cdt,cdn){
       frm.trigger(update_total_amount);
    },
    item_remove(frm){
        frm.trigger(update_total_amount);

    }
});


// frappe.ui.form.on("Ride Booking Item", {
// 	refresh(frm) {

// 	},
//     distance(frm,cdt,cdn){
//         for(let item of frm.doc.items){
//         frm.total_amount+=item.distance*rate;
        

        
//         } 
//     }
// });

