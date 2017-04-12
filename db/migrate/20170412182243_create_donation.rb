class CreateDonation < ActiveRecord::Migration[5.0]
  def change
    create_table :donations do |t|
      t.integer :amount
      t.integer :user_id
      t.integer :npo_id
      t.boolean :fulfilled
    end
  end
end
