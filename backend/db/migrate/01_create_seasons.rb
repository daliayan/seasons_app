class CreateSeasons < ActiveRecord::Migration[6.1]
    def change
      create_table :seasons do |t|
        t.string :name
      end
    end
end