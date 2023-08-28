# Awesome Free AI Learning Resource



## Courses


    ---------------------------------------------------------------------------

    KeyError                                  Traceback (most recent call last)

    <ipython-input-3-29d03bbda5cc> in <module>
         17                     'authorSrc', 'cost', 'createdAt',  'objectives', 'publishedAt',
         18                     'description', 'syllabus', 'duration', 'license', 'updatedAt', 'cover']
    ---> 19 df = apply_common_style(course_df, excluded_columns)
         20 
         21 display(Markdown(df.to_markdown()))


    ~/machine-learning/awesome/lists/lib/utils/awesome_list.py in apply_common_style(df, excluded_columns)
        178     apply_label_style_to_language_column(df)
        179 
    --> 180     apply_label_style_to_column(df, 'topic', topic_icon_palette)
        181 
        182     apply_label_style_to_column(df, 'type', type_icon_palette)


    ~/machine-learning/awesome/lists/lib/utils/awesome_list.py in apply_label_style_to_column(df, text_column, icon_palette, convert)
        126         return ' '.join(list(map(__convert_each__, text.split(','))))
        127 
    --> 128     df[text_column] = df.apply(__convert__, axis=1)
        129 
        130 


    ~/opt/anaconda3/lib/python3.8/site-packages/pandas/core/frame.py in apply(self, func, axis, raw, result_type, args, **kwds)
       7766             kwds=kwds,
       7767         )
    -> 7768         return op.get_result()
       7769 
       7770     def applymap(self, func, na_action: Optional[str] = None) -> DataFrame:


    ~/opt/anaconda3/lib/python3.8/site-packages/pandas/core/apply.py in get_result(self)
        183             return self.apply_raw()
        184 
    --> 185         return self.apply_standard()
        186 
        187     def apply_empty_result(self):


    ~/opt/anaconda3/lib/python3.8/site-packages/pandas/core/apply.py in apply_standard(self)
        274 
        275     def apply_standard(self):
    --> 276         results, res_index = self.apply_series_generator()
        277 
        278         # wrap results


    ~/opt/anaconda3/lib/python3.8/site-packages/pandas/core/apply.py in apply_series_generator(self)
        288             for i, v in enumerate(series_gen):
        289                 # ignore SettingWithCopy here in case the user mutates
    --> 290                 results[i] = self.f(v)
        291                 if isinstance(results[i], ABCSeries):
        292                     # If we have a view on v, we need to make a copy because


    ~/machine-learning/awesome/lists/lib/utils/awesome_list.py in __convert__(x)
        124         text = x[text_column]
        125 
    --> 126         return ' '.join(list(map(__convert_each__, text.split(','))))
        127 
        128     df[text_column] = df.apply(__convert__, axis=1)


    ~/machine-learning/awesome/lists/lib/utils/awesome_list.py in __convert_each__(label_text)
        119     def __convert_each__(label_text):
        120         converted = convert(label_text) if convert else label_text
    --> 121         return f"{icon_palette[converted]} {converted}"
        122 
        123     def __convert__(x):


    KeyError: 'Hardware'

