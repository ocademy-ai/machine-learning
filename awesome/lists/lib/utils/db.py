import sqlite3
import pandas as pd

def init_db(db_name, table_name):
  cnx = sqlite3.connect(db_name)
  print(cnx.cursor().description)
  return pd.read_sql_query(f"SELECT * FROM {table_name}", cnx)