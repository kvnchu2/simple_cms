class CreatePages < ActiveRecord::Migration[5.2]
  def change
    create_table :pages do |t|
      t.string :name
      t.string :permalink
      t.integer :position
      t.boolean :visible
      t.text :content
      t.belongs_to :subject

      t.timestamps
    end
  end
end
