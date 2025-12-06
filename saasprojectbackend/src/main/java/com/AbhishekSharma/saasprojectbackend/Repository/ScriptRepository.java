package com.AbhishekSharma.saasprojectbackend.Repository;

import com.AbhishekSharma.saasprojectbackend.Entity.Script;
import com.AbhishekSharma.saasprojectbackend.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ScriptRepository extends JpaRepository<Script, UUID> {

    List<Script> findByUser(User user);
}
