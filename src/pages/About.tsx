import React from 'react';
import { Heart, Shield, Truck } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Our Custom Bracelets</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Create your perfect bracelet with our custom bracelet builder. Choose from a variety of beautiful beads and band options to express your unique style.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Handcrafted Quality</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Each bracelet is carefully assembled with attention to detail and quality craftsmanship.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
            <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Satisfaction Guaranteed</h3>
          <p className="text-gray-600 dark:text-gray-400">
            We stand behind our products with a 100% satisfaction guarantee.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
            <Truck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Fast Shipping</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Quick processing and shipping to get your custom bracelet to you as soon as possible.
          </p>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Story</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Founded with a passion for creating unique, personalized jewelry, Custom Bracelet Builder has been helping customers express their individuality through custom bracelets since 2020.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          We believe that every bracelet tells a story, and we're here to help you tell yours through our carefully curated selection of beads and bands.
        </p>
      </section>
    </div>
  );
}