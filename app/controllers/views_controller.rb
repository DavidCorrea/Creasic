class ViewsController < ApplicationController

  def application_template
    render template: '/application_template'
  end

  def partial_template
    render template: "partials/#{partial_to_render}", layout: nil
  end

  private

  def partial_to_render
    params[:path]
  end

end