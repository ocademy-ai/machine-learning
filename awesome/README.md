# Awesome Free AI Learning Resource



## Courses


    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    Cell In[6], line 19
         15 # Render the output
         16 excluded_columns = ['id', 'source', 'organizationSrc', 'author', 'organization',
         17                     'authorSrc', 'cost', 'createdAt',  'objectives', 'publishedAt',
         18                     'description', 'syllabus', 'duration', 'license', 'updatedAt', 'cover',]
    ---> 19 df = apply_common_style(course_df, excluded_columns)
         21 display(Markdown(df.to_markdown()))
         22 markdown_content = df.to_markdown()
    

    File f:\bestfw.github.io\awesome\lists\lib\utils\awesome_list.py:172, in apply_common_style(df, excluded_columns)
        168 def apply_common_style(df, excluded_columns):
        170     apply_a_tag_to_column(df, 'source', 'title')
    --> 172     create_by_column_from_author_column_and_platform_column(df)
        174     apply_label_style_to_column(df, 'price', price_icon_palette)
        175     df['price'] = df.apply(lambda x: f"{x['price']} of {x['cost']}$" if x['cost'] != 0 else x['price'], axis=1)
    

    File f:\bestfw.github.io\awesome\lists\lib\utils\awesome_list.py:155, in create_by_column_from_author_column_and_platform_column(df, author_column, by_column, author_src_column, platform_column, platform_src_column)
        153 apply_a_tag_to_column(df, platform_src_column, platform_column)
        154 apply_a_tag_to_column(df, author_src_column, author_column)
    --> 155 df[by_column] = df.apply(lambda x: _construct_author(x, author_column, platform_column), axis=1)
        156 df.insert(2, by_column, df.pop(by_column))
    

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
    

    File f:\bestfw.github.io\awesome\lists\lib\utils\awesome_list.py:155, in create_by_column_from_author_column_and_platform_column.<locals>.<lambda>(x)
        153 apply_a_tag_to_column(df, platform_src_column, platform_column)
        154 apply_a_tag_to_column(df, author_src_column, author_column)
    --> 155 df[by_column] = df.apply(lambda x: _construct_author(x, author_column, platform_column), axis=1)
        156 df.insert(2, by_column, df.pop(by_column))
    

    File f:\bestfw.github.io\awesome\lists\lib\utils\awesome_list.py:139, in _construct_author(x, author_column, platform_column)
        136 if x[author_column] is np.nan:
        137     return x[platform_column]
    --> 139 if x['authorCount'] > 3:
        140     x[author_column] += ', others'
        142 if x[platform_column] is not "":
    

    TypeError: '>' not supported between instances of 'NoneType' and 'int'

