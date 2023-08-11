import numpy as np
import pandas as pd
from langcodes import Language

SVG_CHECK = '<svg t="1690848852144" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7842" width="32" height="32"><path d="M511.75543 62.584384c-247.815085 0-448.708512 200.659089-448.708512 448.186625 0 247.52549 200.893426 448.185602 448.708512 448.185602 247.814062 0 448.707488-200.659089 448.707488-448.185602C960.462918 263.243473 759.569492 62.584384 511.75543 62.584384L511.75543 62.584384zM406.268934 739.938386l-35.823903-35.779901 0.11768-0.116657L174.825724 508.533039l35.82288-35.780925 195.736986 195.507766 378.618177-378.179179 35.82595 35.780925L406.268934 739.938386 406.268934 739.938386z" fill="#1afa29" p-id="7843"></path></svg>'
SVG_CROSS = '<svg t="1690848769896" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5969" width="32" height="32"><path d="M1024 512c0-282.763636-229.236364-512-512-512C229.236364 0 0 229.236364 0 512c0 282.763636 229.236364 512 512 512C794.763636 1024 1024 794.763636 1024 512zM281.6 709.492364 479.092364 512 281.6 314.507636 314.507636 281.6 512 479.092364l197.492364-197.492364 32.907636 32.907636L544.907636 512l197.492364 197.492364-32.907636 32.907636L512 544.907636 314.507636 742.4 281.6 709.492364z" p-id="5970" fill="#d81e06"></path></svg>'

price_icon_palette = {
    'Free': '🟩',
    'Paid': '🟥',
}

label_icon_palette = {
    'Data science': '💿',
    'AI': '🤖',
    'Python': '🐍',
    'Projects': '👨‍🏫',
    'SQL': '📊',
    'Javascript': '🫙',
    'Video': '🎥',
    'Data visualization': '📈',
    'Machine learning': '🧠',
    'Math': '🧮',
    'Deep learning': '👽',
    'Code': '⌨️',
    'Big data': '⚡️',
    'NLP': '🗣️',
    'Computer vision': '👓',
    'Hardware': '💻',
    'Robotics': '🦿',
    'Self driving': '🚗',
    'Reinforcement learning': '🎮',
}

language_icon_palette = {
    'English': '🇺🇸',
    '中文': '🇨🇳',
    'français': '🇫🇷',
}

topic_icon_palette = {
    'Data science': '💿',
    'AI': '🤖',
    'Python': '🐍',
    'Machine learning': '🧠',
    'Deep learning': '👽',
    'Robotics': '🦿',
}

type_icon_palette = {
    'Self-paced': '🟩',
    'Instructor-led': '🟥',
}

level_icon_palette = {
    'Beginner': '🟩',
    'Intermediate': '🟧',
    'Advanced': '🟥',
}


def truncate_column(df, column_name, length=50):
    df[column_name] = df[column_name].apply(
        lambda x: f"{x[:length]}..." if len(x) > length else x)


def capitalize_properly(t):
    return t if t.isupper() else t.capitalize()


def apply_a_tag_to_column(df, url_column, text_column):
    if text_column not in df or url_column not in df:
        return

    def __convert__(x):
        if x[text_column] == '' or x[text_column] is np.nan:
            return ''
        
        if x[url_column] == '' or x[url_column] is np.nan:
            return x[text_column]
        
        if text_column in ['tag', 'author']:
            text_array = x[text_column].split(',')
            url_array = x[url_column].split(',')
        else:
            text_array = [x[text_column]]
            url_array = [x[url_column]]
        
        result = []
        
        for i in range(0, len(text_array)):
            text = text_array[i]
            url = url_array[i]
            result.append('<a href="{0}">{1}</a>'.format(url, text) if url != '' else text)

        return ', '.join(result)

    df[text_column] = df.apply(__convert__, axis=1)


def apply_label_style_to_boolean_column(df, column_name):
    if column_name not in df:
        return
    
    df[column_name] = df[column_name].apply(lambda x: '✅' if x == 'True' else '❌')


def apply_label_style_to_column(df, text_column, icon_palette, convert=capitalize_properly):
    if text_column not in df:
        return    
    
    def __convert_each__(label_text):
        converted = convert(label_text) if convert else label_text
        return f"{icon_palette[converted]} {converted}"

    def __convert__(x):
        text = x[text_column]

        return ' '.join(list(map(__convert_each__, text.split(','))))

    df[text_column] = df.apply(__convert__, axis=1)


def apply_svg_to_boolean_column(df, column_name):
    df[column_name] = df[column_name].apply(
        lambda x: SVG_CHECK if x else SVG_CROSS)


def apply_label_style_to_language_column(df, column_name='language'):
    apply_label_style_to_column(df, column_name, language_icon_palette, lambda x: Language.get(
        x).describe(language=x)[column_name])


def create_by_column_from_author_column_and_platform_column(
        df, author_column='author', by_column='by', author_src_column='authorSrc', platform_column='organization', platform_src_column='organizationSrc'):
    if platform_column not in df and author_column not in df:
        return
    
    apply_a_tag_to_column(df, platform_src_column, platform_column)
    apply_a_tag_to_column(df, author_src_column, author_column)
    df[by_column] = df.apply(lambda x: x[platform_column] if x[author_column]
                        is np.nan else f"{x[author_column]}@{x[platform_column]}" if x[platform_column] is not np.nan else x[author_column], axis=1)
    df.insert(2, by_column, df.pop(by_column))


def clean_up(df, excluded_columns):
    df = df.loc[:, ~df.columns.isin(excluded_columns)]
    df = df.replace(np.nan, '', regex=True)

    df.columns = df.columns.str.capitalize()
    df.index += 1
    return df


def apply_common_style(df, excluded_columns):

    if 'published_at' in df:
        df = df.rename(columns={'published_at': 'published At'})

    apply_a_tag_to_column(df, 'source', 'title')

    apply_a_tag_to_column(df, 'organizationSrc', 'organization')

    apply_a_tag_to_column(df, 'authorSrc', 'author')

    apply_label_style_to_column(df, 'price', price_icon_palette)
    df['price'] = df.apply(lambda x: f"{x['price']} of {x['cost']}$" if x['cost'] != 0 else x['price'], axis=1)

    apply_label_style_to_column(df, 'tag', label_icon_palette)

    apply_label_style_to_language_column(df)

    apply_label_style_to_column(df, 'topic', topic_icon_palette)

    apply_label_style_to_column(df, 'type', type_icon_palette)

    apply_label_style_to_column(df, 'level', level_icon_palette)

    apply_label_style_to_boolean_column(df, 'hasCert')
    
    return clean_up(df, excluded_columns)