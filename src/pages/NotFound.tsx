import React from 'react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-ivory pb-24 pt-40 lg:pt-56">
      <Container>
        <p className="eyebrow mb-6 flex items-center gap-4 text-gold-deep">
          <span className="h-px w-10 bg-gold" aria-hidden="true" />
          Page not found
        </p>
        <h1 className="max-w-3xl text-5xl leading-[1.02] sm:text-7xl">
          This piece seems to have <span className="italic text-gold-deep">slipped away.</span>
        </h1>
        <p className="mt-8 max-w-md text-base leading-relaxed text-stone">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
        </p>
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-10">
          <Button to="/" arrow>Return Home</Button>
          <Button to="/collections" variant="text">Browse collections</Button>
        </div>
      </Container>
    </section>
  );
}
