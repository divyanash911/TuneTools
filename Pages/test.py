import sqlite3
conn = sqlite3.connect('proj.db')
cursor = conn.cursor()
name="S"
cursor.execute(f'Select * from data where name="{name}";')
data = cursor.fetchall()
print(data)
# conn.commit()
conn.close()