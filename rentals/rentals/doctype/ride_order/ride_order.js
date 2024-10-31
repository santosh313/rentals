    // Copyright (c) 2024, santosh and contributors
    // For license information, please see license.txt

    frappe.ui.form.on("Ride Order", {
        onload(frm) {
            console.log("Rendering onload")
        },
        setup(frm) {
            console.log("rendering set up")
        },
        refresh(frm) {
            console.log("rendering refresh")
            if(frm.doc.status !=="Accepted"){
                frm.add_custom_button("Accept" ,() => {
                    frappe.show_alert("It s working")
                    // status=accepted
                    frm.set_value("status","Accepted");
                    // form save
                    frm.save();
                },"Actions");
            }
            if(frm.doc.status!=="Rejected"){
                frm.add_custom_button("Reject" ,() => {
                    frappe.show_alert("It s working")
                    // status=accepted
                    frm.set_value("status","Rejected");
                    // form save
                    frm.save();
                },"Actions");

            }
                
            },
        

        status(frm){
            frappe.msgprint("Status Chnaged");
        }
    });
