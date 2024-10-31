import frappe

# @frappe.whitelist(allow_guest=True)
# def get_emoji():
#     return "💰"

@frappe.whitelist(allow_guest=True)
def get_emoji(doc,event):
    frappe.throw("abcd")


@frappe.whitelist(allow_guest=True)
def send_payment_reminders():
    pass

def my_function_submit_hundread_invoices():
    pass
 
def get_query_conditions_for_vehicle(user):#user for which permission are being evaluated
    return "name=1"