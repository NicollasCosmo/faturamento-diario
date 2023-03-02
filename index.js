import pandas as pd
import numpy as np

# Cria um DataFrame com as datas e os faturamentos diários
data_inicio = pd.Timestamp('2023-03-01') # Defina a data de início desejada
faturamento = np.random.randint(1000, 10000, size=30)
df = pd.DataFrame({'data': pd.date_range(data_inicio, periods=30),
                   'faturamento': faturamento})

# Filtra apenas os dias úteis
df = df.set_index('data')
df = df.asfreq('B')

# Calcula o menor valor de faturamento diário
menor_faturamento = df['faturamento'].min()

# Calcula o maior valor de faturamento diário
maior_faturamento = df['faturamento'].max()

# Calcula a média mensal de faturamento diário
media_mensal = df['faturamento'].mean()

# Calcula o número de dias em que o faturamento diário foi superior à média mensal
dias_acima_da_media = (df['faturamento'] > media_mensal).sum()

# Imprime os resultados
print("Menor faturamento diário:", menor_faturamento)
print("Maior faturamento diário:", maior_faturamento)
print("Dias úteis com faturamento acima da média mensal:", dias_acima_da_media)

