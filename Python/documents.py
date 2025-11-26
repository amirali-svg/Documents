# F String

# name = 'Amirali'
# familyName = 'Borji'
# age = 16.439312

# print(f'Hello you are {name} {familyName} and you are {age:1.1f}')


# List (Arrays [])

# names = ['jadi', 'zahra', 'sina', 'amir', 'ali']
# things = [False, 2, 3.14, 'amir']

# names.index('amir')
# names.reverse()
# names.pop()
# names.append(10)
# names.sort(w)
# names.remove('zahra')

# print(names)

# my_list = [1, 2, 4]
# my_list.insert(2, 3)   درج عدد 3 در ایندکس 2
# print(my_list)   خروجی: [1, 2, 3, 4]


# Dic (Object)

# score = {'riazi': 16, 'programming': 20}

# score['farsi'] = 20
# print(len(score))w


# scores = {'jadi': {
#              'riazi': 16,
#              'programming': 21
#         },
#          'amir': {
#              'riazi': 15,
#              'programming': 20
#          },
# }

# print(scores['amir']['programming'])
# print(scores['jadi']['riazi'])

# scores.keys()
# scores.values()
# scores.items()
# scores.pop('jadi')

# print(scores.get('jadi', -1))
# اگر ورودی اول رو یپدا نکرد ورودی دوم را برمیگرداند


# Dic exercise
# fruit_prices = {
#    'apple': 1500,
#    'banan': 1000,
#    'orange': 1200
# }

# fruit_prices['banan'] = 1100
# fruit_prices.pop('apple')
# print(fruit_prices)


# Tuple

# همون لیست ولی با فرق اینکه نمیشه مقدار اونهارو عوض کرد یعنی اونها
# (Immutable)
# هستند

# t1 = (1, 2, 3, 4, 'ali', 3.14)

# resault = ('jadi', 12)
# name, nomre = resault
# هر کدوم از عناصر داخل یک متغیر قرار میگیرد و این کار در لیست هم امکان دارد

# tuple exercise
# coordinates = (3 ,4)
# distance = (coordinates[0] ** 2 + coordinates[1] ** 2) ** 0.5
# print(f"[Distance] => {distance}")

# Fileio
# دیتایی که محتویات بقیه فایل هارو میخونه
from pydoc import apropos
from turtle import width


file_io = open("file.txt")  # اوپن یه کلمه کلیدی هست
file_io.close()  # فایل رو میبندیم و دیگه باهاش کاری نداریم
file_io.seek(0)  # به اول فایل برمیگردیم

# روش بهتر برای استفاده از fileio

with open("file.txt") as file_io_2:
    lines = file_io_2.readlines()
    print(lines)

    # F String

# name = 'Amirali'
# familyName = 'Borji'
# age = 16.439312
#
# print(f'Hello you are {name} {familyName} and you are {age:1.1f}')


# Lists (Arrays [])
# names = ['jadi', 'zahra', 'sina', 'amir', 'ali']
# things = [False, 2, 3.14, 'amir']

# names.index('amir')
# names.reverse()
# names.pop()
# names.append(10)
# names.sort(w)
# names.remove('zahra')

# print(names)


# Dic (Object)

score = {"riazi": 16, "programming": 20}
scores = {
    "jadi": {"riazi": 16, "programming": 21},
    "amir": {"riazi": 15, "programming": 20},
}

print(scores["amir"]["programming"])
print(scores["jadi"]["riazi"])

# scores.keys()
# scores.values()
# scores.items()
print(scores.get("jadi"))

# Function


def sum(a, b):
    """
    Duck string
    # برای توضیح یک تابع استفاده میشه
    """
    return a + b


print(sum(1, 2))


# n=1 یعنی اگر ان رو نداده بود اون رو ۱ در نظر بگیر
def print_n_times(name, n=1):
    for i in range(n):
        print(name)


print_n_times("amir")


# Donation analysis

donations = {"amir": 100, "sara": 2, "ali": 50, "ashkan": 20}


def donations_analysis(don):
    total = 0
    count = 0
    max_donation = -1
    max_donation_person = ""

    for name, value in don.items():
        total += value
        count += 1
        if max_donation < value:
            max_donation = value
            max_donation_person = name

    average = int(total / count)

    return average, total, max_donation, max_donation_person


avg, total, max_donation, max_donation_person = donations_analysis(donations)

print(f"average: {avg}")
print(f"total: {total}")
print(f"thanks to {max_donation_person} for {max_donation} BTC")


multiply = lambda x, y: x * y
# lambda: توابع نا شناخته
print(multiply(3, 4))


# OOP

# با کلاس ها میشه یه مفهومی تعریف کرد و این مهفوم رو به متغیر ها نسبت داد


class person:
    pass  # این کلاس هیچ کاری انجام نمیده


class book:
    book_type = "horror"

    def __init__(self, page):
        # self: خود متغیر که این کلاس رو بهش نسبت میدیم
        # page: مفهومی که میخوایم نسبت بدیم مثلا تعداد ورقه ها که از ورودی دریافت میشه
        self.pages = page

    def open(self):
        print(f"opened the book on last page ({self.pages})")


book.book_type = "triller"  # بوک تایپ کلاس اصلی رو عوض میکنه نه اینستنس اون داخل یه متغیر خاص در نتیجه همه اینستنس ها هم به همین مقدار عوض میشوند


mybook = book(276)
print(mybook.pages)  # book.X: مفهومی که دنبال اون میگردیم


# حساب کردن مساحت دایره با کلاس
from turtle import circle


class Circle:
    pi = 3.1415926

    def __init__(self, r):
        self.r = r

    def masahat(self):
        m = self.r * self.r * self.pi
        return m


c1 = Circle(13)
print(c1.masahat())

# try except

try:
    # سعی میکنه یه کاری بکنه
    print(10 / 0)
except:
    print("nattonestam!")

# مثال بهتر:


def divide(a, b):
    try:
        return a / b
    except Exception as e:
        # expsion as e :  خطا رو میگیره و داخل e قرار میده
        print(f"Error in returning the result: {e}")
        return None


def divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        # expsion as e :  خطا رو میگیره و داخل e قرار میده
        print("B can not be 0")
        return None
    except Exception as e:
        print(f"Error in returning the result: {e}")


# ارور های از قبل شناخته شده توسط پایتون: built-in Exeptions

try:
    # سعی میکنه یه کاری بکنه
    print("try")
except:
    # اگه تلاش بالا این کار نکرد این کارو میکنه
    print("except")
else:
    # اگه به ارور نخورد
    print("else")
finally:
    # حتما این کارار رو هم بکن
    print("finally")


def divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        print("B can not be 0")
        return None

    except ValueError:
        print("Only numbers are allowed!")


print(divide(1, 5))
print(divide(1, 0))
print(divide(True, "awdwa"))


# تست نویسی در پایتون
# کد
def count_c(s, c):
    found = 0
    for char in s:
        if char == c:
            found += 1
    return found


# تست
import unittest
from prog import count_c


class TestCountC(unittest.TestCase):
    def test_simple(self):
        s = "raminr"
        c = "r"
        self.assertEqual(count_c(s, c), 2)


if __name__ == "__main__":
    unittest.main()


# ارور هندلینگ فانکشن
def divide(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        print("second number can not be 0!")
        print("---------------------------")
    except ValueError:
        print("Only numbers are allowed!")
        print("---------------------------")


while True:
    try:
        num1 = int(input("Enter first number: "))
        num2 = int(input("Enter second number: "))
        result = divide(num1, num2)
        if result != None:
            print(f"result => {result}")
    except:
        print("Only numbers are allowed!")
        print("---------------------------")
