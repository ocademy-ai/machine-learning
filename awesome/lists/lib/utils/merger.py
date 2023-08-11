def merge_table(main_df, intermediate_df, merged_df, main_id_name, merged_id_name, column_mapping):
    def join_values(values):
        non_none_values = [value for value in values if value is not None]
        if non_none_values:
            return ','.join(str(value) for value in non_none_values)
        else:
            return None
    # generate aggregation_cols
    aggregation_cols = {new_key: join_values for new_key, old_value in column_mapping.items()}
    # merge intermediate_df and merged_df
    intermediate_df = intermediate_df.merge(merged_df, left_on=merged_id_name, right_on='id')
    # group by main_id_name
    intermediate_df = intermediate_df.groupby(main_id_name, as_index=False).agg(aggregation_cols)
    # rename intermediate_df's columns
    for old_column_name, new_column_name in column_mapping.items():
        intermediate_df.rename(columns={old_column_name: new_column_name}, inplace=True)
    # merge main_df and intermediate_df
    main_df = main_df.merge(intermediate_df, left_on='id', right_on=main_id_name, how='left').drop(columns=[main_id_name])
    return main_df
  