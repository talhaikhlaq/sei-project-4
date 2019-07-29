import math
from datatime import date, datetime

def is_unique(model, key, value):
    return model.query.filter(getattr(model, key) == value).first is None

months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
}

# returning the current month number above based on current date
def current_month_num():
    return int(datetime.now().strftime('%m'))

#  returning the next month number in sequence based on current month
def next_month(current_month_num):
    if current_month_num == 12:
        return 1
    else:
        return current_month_num + 1

def previous_month(current_month_num):
    if current_month_num == 1:
        return 12
    else:
        return current_month_num - 1
