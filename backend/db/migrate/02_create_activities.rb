class CreateActivities < ActiveRecord::Migration[6.1]
    def change
        create_table :activities do |t|
            t.string :name
            t.string :location
            t.integer :price
            t.belongs_to :season, null: false, foreign_key: true
        end
    end
end