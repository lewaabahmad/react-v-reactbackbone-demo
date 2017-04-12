class CreateNpo < ActiveRecord::Migration[5.0]
  def change
    create_table :npos do |t|
      t.string :name
      t.string :icon
      t.string :guidestar_id
      t.string :description 
    end
  end
end
