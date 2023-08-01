import numpy as np

SVG_CHECK = '<svg t="1690848852144" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7842" width="32" height="32"><path d="M511.75543 62.584384c-247.815085 0-448.708512 200.659089-448.708512 448.186625 0 247.52549 200.893426 448.185602 448.708512 448.185602 247.814062 0 448.707488-200.659089 448.707488-448.185602C960.462918 263.243473 759.569492 62.584384 511.75543 62.584384L511.75543 62.584384zM406.268934 739.938386l-35.823903-35.779901 0.11768-0.116657L174.825724 508.533039l35.82288-35.780925 195.736986 195.507766 378.618177-378.179179 35.82595 35.780925L406.268934 739.938386 406.268934 739.938386z" fill="#1afa29" p-id="7843"></path></svg>'
SVG_CROSS = '<svg t="1690848769896" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5969" width="32" height="32"><path d="M1024 512c0-282.763636-229.236364-512-512-512C229.236364 0 0 229.236364 0 512c0 282.763636 229.236364 512 512 512C794.763636 1024 1024 794.763636 1024 512zM281.6 709.492364 479.092364 512 281.6 314.507636 314.507636 281.6 512 479.092364l197.492364-197.492364 32.907636 32.907636L544.907636 512l197.492364 197.492364-32.907636 32.907636L512 544.907636 314.507636 742.4 281.6 709.492364z" p-id="5970" fill="#d81e06"></path></svg>'

def truncate_column(df, column_name, length=50):
    df[column_name] = df[column_name].apply(
        lambda x: f"{x[:length]}..." if len(x) > length else x)


def capitalize_properly(t):
    return t if t.isupper() else t.capitalize()


def apply_a_tag_to_column(df, url_column, text_column):
    df[text_column] = df.apply(
        lambda x: '<a href="{0}">{1}</a>'.format(x[url_column], x[text_column]) if x[url_column] is not np.nan else x[text_column], axis=1)


def apply_label_style_to_column(df, text_column, icon_palette, convert=capitalize_properly):
    
    def __convert_each__(label_text):
        converted = convert(label_text) if convert else label_text
        # return '<div class="rounded-label" style="background-color:{1};">{0}</div>'.format(converted, icon_palette[converted])
        return icon_palette[converted] + converted
    
    def __convert__(x):
        text = x[text_column]
        
        return ' '.join(list(map(__convert_each__, text.split(','))))
    
    df[text_column] = df.apply(__convert__, axis=1)


def apply_svg_to_boolean_column(df, column_name):
    df[column_name] = df[column_name].apply(
        lambda x: SVG_CHECK if x else SVG_CROSS)
