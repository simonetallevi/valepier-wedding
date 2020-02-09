package com.valepierwedding.service.datastore;

public interface GenericConsumer<T> {

	void accept(T t);

}
