class DonateController < ApplicationController
  def index
    @react_props = { authenticity_token: form_authenticity_token }
  end

  def create
    binding.pry
  end
end
