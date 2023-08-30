# Awesome Free AI Learning Resource



## Courses


    ---------------------------------------------------------------------------

    KeyError                                  Traceback (most recent call last)

    Cell In[37], line 19
         15 # Render the output
         16 excluded_columns = ['id', 'source', 'organizationSrc',
         17                     'authorSrc', 'cost', 'createdAt',  'objectives', 'publishedAt',
         18                     'description', 'syllabus', 'duration', 'license', 'updatedAt', 'cover',]
    ---> 19 df = apply_common_style(course_df, excluded_columns)
         21 display(Markdown(df.to_markdown()))
         22 markdown_content = df.to_markdown()
    

    File f:\bestfw.github.io\awesome\lists\lib\utils\awesome_list.py:170, in apply_common_style(df, excluded_columns)
        167 apply_label_style_to_column(df, 'price', price_icon_palette)
        168 df['price'] = df.apply(lambda x: f"{x['price']} of {x['cost']}$" if x['cost'] != 0 else x['price'], axis=1)
    --> 170 apply_label_style_to_column(df, 'tag', label_icon_palette)
        172 apply_label_style_to_language_column(df)
        174 apply_label_style_to_column(df, 'topic', topic_icon_palette)
    

    File f:\bestfw.github.io\awesome\lists\lib\utils\awesome_list.py:122, in apply_label_style_to_column(df, text_column, icon_palette, convert)
        118     text = x[text_column]
        120     return ' '.join(list(map(__convert_each__, text.split(','))))
    --> 122 df[text_column] = df.apply(__convert__, axis=1)
    

    File c:\Users\Victor\AppData\Local\Programs\Python\Python39\lib\site-packages\pandas\core\frame.py:9423, in DataFrame.apply(self, func, axis, raw, result_type, args, **kwargs)
       9412 from pandas.core.apply import frame_apply
       9414 op = frame_apply(
       9415     self,
       9416     func=func,
       (...)
       9421     kwargs=kwargs,
       9422 )
    -> 9423 return op.apply().__finalize__(self, method="apply")
    

    File c:\Users\Victor\AppData\Local\Programs\Python\Python39\lib\site-packages\pandas\core\apply.py:678, in FrameApply.apply(self)
        675 elif self.raw:
        676     return self.apply_raw()
    --> 678 return self.apply_standard()
    

    File c:\Users\Victor\AppData\Local\Programs\Python\Python39\lib\site-packages\pandas\core\apply.py:798, in FrameApply.apply_standard(self)
        797 def apply_standard(self):
    --> 798     results, res_index = self.apply_series_generator()
        800     # wrap results
        801     return self.wrap_results(results, res_index)
    

    File c:\Users\Victor\AppData\Local\Programs\Python\Python39\lib\site-packages\pandas\core\apply.py:814, in FrameApply.apply_series_generator(self)
        811 with option_context("mode.chained_assignment", None):
        812     for i, v in enumerate(series_gen):
        813         # ignore SettingWithCopy here in case the user mutates
    --> 814         results[i] = self.f(v)
        815         if isinstance(results[i], ABCSeries):
        816             # If we have a view on v, we need to make a copy because
        817             #  series_generator will swap out the underlying data
        818             results[i] = results[i].copy(deep=False)
    

    File f:\bestfw.github.io\awesome\lists\lib\utils\awesome_list.py:120, in apply_label_style_to_column.<locals>.__convert__(x)
        117 def __convert__(x):
        118     text = x[text_column]
    --> 120     return ' '.join(list(map(__convert_each__, text.split(','))))
    

    File f:\bestfw.github.io\awesome\lists\lib\utils\awesome_list.py:115, in apply_label_style_to_column.<locals>.__convert_each__(label_text)
        113 def __convert_each__(label_text):
        114     converted = convert(label_text) if convert else label_text
    --> 115     return f"{icon_palette[converted]} {converted}"
    

    KeyError: 'Slides'

